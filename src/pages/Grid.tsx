import { useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import type {
  ColDef,
  RowClickedEvent,
  RowSelectedEvent,
} from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import Button from '../common/Button';
import Input from '../common/Input';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { gridSearchSchema } from '../utils/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQuery } from '@tanstack/react-query';
import { getTodos, type Todos, saveTodos } from '../services/api/grid.service';

export interface GridSearchParams {
  search: string;
  id: string;
}

const SaveTest = (): JSX.Element => {
  //useform 사용으로
  const { t } = useTranslation();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<GridSearchParams>({
    mode: 'onSubmit',
    resolver: yupResolver(gridSearchSchema),
  });

  console.log('search ==> ', watch('search'));

  const onSubmit = async (data: GridSearchParams) => {
    const xxx = await saveTodos(data);
    console.log(xxx);
  };

  return (
    <>
      <form
        className="m-auto w-[90%] md:w-[30%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          errors={errors}
          placeholder={t('common.save')}
          register={register}
          name="search"
        />
        <Input errors={errors} placeholder="id" register={register} name="id" />
        {/* {errors && <span>{`${errors}`}</span>} */}
        <br />

        <Button text={t('common.save')} type="submit" />
      </form>
      <hr />
    </>
  );
};

const Grid = () => {
  const colDefs: ColDef[] = [
    { headerName: 'userId', field: 'userId' },
    { headerName: 'id', field: 'id' },
    { headerName: 'title', field: 'title' },
    { headerName: 'completed', field: 'completed' },
    { headerName: 'random', field: 'random' },
  ];
  const [page, setPage] = useState<string>('');
  const { t } = useTranslation();

  //react query 사용
  const { data, error, refetch } = useQuery(
    ['grid', page],
    () => getTodos(page),
    { enabled: false },
  );

  //react useMemo hook 사용
  const custom = useMemo(() => {
    if (!data) return [];
    return data?.map((item) => {
      return {
        ...item,
        completed: item.completed ? '완료' : '미완료',
        random: Math.random().toString(36).substring(7),
      };
    });
  }, [data]);

  const onRowClicked = (event: RowClickedEvent<Todos>) => {
    console.log(event.data!.userId);
  };

  const onRowSelected = (event: RowSelectedEvent<Todos>) => {
    console.log('onRowSelected', event.data);
  };

  return (
    <>
      <SaveTest />
      <input
        className="border rounded-lg p-2 mb-2"
        type="text"
        onChange={(e) => setPage(e.target.value)}
      />
      <Button
        text={`${t('common.search')} --- ${page} `}
        onClick={() => refetch()}
      />
      {error && <div>{`${error}`}</div>}
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact<Todos>
          rowData={custom}
          columnDefs={colDefs}
          onRowClicked={onRowClicked}
          onRowSelected={onRowSelected}
          rowSelection="multiple"
        />
      </div>
    </>
  );
};

export default Grid;
