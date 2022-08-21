import { FC } from 'react';

export interface SharedTextFieldProps {
  title: string;
  value: string;
  onChange: (e: any) => void;
}

export const SharedTextField: FC<SharedTextFieldProps> = ({
  title,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  };

  return (
    <input
      type="text"
      value={value}
      title={title}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default SharedTextField;
