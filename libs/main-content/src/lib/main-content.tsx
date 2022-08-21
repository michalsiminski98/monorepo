import { ArticlesSection } from '@./arcticles-section';
import { ArticlesForm } from '@./articles-form';
import { ArticlesFormButtons } from '@./articles-form-buttons';
import {
  mainContentActions,
  mainContentDataSelector,
} from '@./slices/main-content';
import { useFormik } from 'formik';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledContent } from './main-content-styles';

export interface INITIAL_VALUESProps {
  name: string;
  text: string;
}
const INITIAL_VALUES: INITIAL_VALUESProps = {
  name: '',
  text: '',
};

export const MainContent: FC = () => {
  const { articleCards } = useSelector(mainContentDataSelector);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: (form) => {
      if (formik.isValid) {
        const newArticle = [
          {
            id: '12312123312',
            name: form.name,
            text: form.text,
          },
        ];
        dispatch(mainContentActions.setArticleCards(newArticle));
        formik.resetForm();
      }
    },
    validate: () => {
      return;
    },
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <StyledContent>
      <ArticlesSection cards={articleCards} />
      <ArticlesForm formik={formik} />
      <ArticlesFormButtons formik={formik} submitDisabled={!formik.dirty} />
    </StyledContent>
  );
};
