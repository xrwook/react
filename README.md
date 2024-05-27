read
code --list-extensions > extensions.list

code --list-extensions | % { "code --install-extension $_" }


tsrafce
http://mwkorea.ipdisk.co.kr:80/publist/VOL1/mwk_share/Hyundai-EVPlatform-BO/20240514-Hyundai-EVPlatform-BO.zip 





const oriData: Record<string, any>  = { ...data };

  for (const listKey in oriData.filterList) {
    oriData.filterList[listKey] = oriData.filterList[listKey].map((x: any) => {
      const newItem = [];
      for (const key in x) {
        newItem.push({ id: key, name: x[key] });
      }
      return newItem;
    });
  }

  console.log(oriData)





import { useState, useRef, useEffect } from 'react';
import { FilterListStyle, FilterListWrap } from './StyledFilter';
import Button from 'common/Button/Button';
export interface FilterListProps {
  children?: any;
  useDetailButtons?: boolean;
  changeFilterInitial?: () => void;
}

const FilterList: React.FC<FilterListProps> = ({
  children,
  useDetailButtons,
  changeFilterInitial,
}) => {
  const [initElements, setInitElements] = useState(children);
  const [detailButtons, setDetailButtons] = useState<boolean>(
    useDetailButtons || true,
  );
  const [elements, setElements] = useState<string[]>([]);

  useEffect(() => {
    const childrenArray = children.flat();
    setInitElements(childrenArray);
    setDetailButtons(childrenArray.length > 6 ? true : false);
    setElements(
      childrenArray.length > 6 && !detailButtons
        ? childrenArray.slice(0, 6)
        : childrenArray,
    );
  }, [children]);

  const [expanded, setExpanded] = useState<boolean>(false);
  const filterListElement = useRef<any>(null);
  const expandedElements = () => {
    setElements(initElements);
    setExpanded(true);
  };

  const collapseElemnts = () => {
    setElements(initElements.slice(0, 6));
    setExpanded(false);
  };

  useEffect(() => {
    console.log('initElements.length: ', initElements.length);
    console.log('useDetailButtons: ', detailButtons);
  }, []);

  return (
    <FilterListWrap>
      <FilterListStyle className="filter-list" ref={filterListElement}>
        {detailButtons
          ? elements?.map((element, index) => <div key={index}>{element}</div>)
          : children}
        {detailButtons && (
          <div className="filter-detail-button-group">
            {!expanded ? (
              <Button
                onClick={expandedElements}
                $size="mini"
                $variant="secondaryGray"
                className="filter-detail-button__detail"
              >
                더보기
              </Button>
            ) : (
              <>
                <Button
                  onClick={collapseElemnts}
                  $size="mini"
                  $variant="secondaryGray"
                  className="filter-detail-button__detail"
                >
                  간략히
                </Button>
                <Button
                  onClick={() => {
                    changeFilterInitial ? changeFilterInitial() : null;
                  }}
                  $size="mini"
                  $variant="secondaryGray"
                  className="filter-detail-button__detail"
                >
                  초기화
                </Button>
              </>
            )}
          </div>
        )}
      </FilterListStyle>
    </FilterListWrap>
  );
};

export default FilterList;
