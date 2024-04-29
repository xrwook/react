import * as yup from 'yup';
import i18n from '../locale/index';

export const loginSchema = yup.object().shape({
  username: yup.string().required(i18n.t('login.nameRequired')),
  password: yup.string().required(i18n.t('login.passRequired')),
});

export const gridSearchSchema = yup.object().shape({
  search: yup
    .string()
    .required(i18n.t('common.search'))
    .matches(/^[a-zA-Z0-9]*$/, i18n.t('common.onlyNumber')),
  id: yup
    .string()
    .required(i18n.t('common.search'))
    .matches(/^[0-9]*$/, i18n.t('common.onlyNumber')),
});
