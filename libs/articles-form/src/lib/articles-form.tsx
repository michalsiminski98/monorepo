import { SharedTextField } from '@./shared/text-field';
import { FormikProps } from 'formik';
import { t } from 'i18next';
import { FC } from 'react';
import { StyledFormContainer } from './articles-form-styles';

export interface ArticlesFormProps {
  formik: FormikProps<any>;
}

export const ArticlesForm: FC<ArticlesFormProps> = ({ formik }) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('name', e.target.value);
  };
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldValue('text', e.target.value);
  };

  return (
    <StyledFormContainer>
      <SharedTextField
        title={t('shared.name')}
        value={formik.values.name}
        onChange={handleNameChange}
      />
      <SharedTextField
        title={t('shared.description')}
        value={formik.values.text}
        onChange={handleDescriptionChange}
      />
    </StyledFormContainer>
  );
};

export default ArticlesForm;
