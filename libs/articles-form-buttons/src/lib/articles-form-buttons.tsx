import { FormikProps } from 'formik';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface ArticlesFormButtonsProps {
  formik: FormikProps<any>;
  submitDisabled: boolean;
}

export const ArticlesFormButtons: FC<ArticlesFormButtonsProps> = ({
  formik,
  submitDisabled,
}) => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    formik.submitForm();
  };

  return (
    <div>
      <button type="submit" disabled={submitDisabled} onClick={handleSubmit}>
        {t('shared.submit')}
      </button>
    </div>
  );
};

export default ArticlesFormButtons;
