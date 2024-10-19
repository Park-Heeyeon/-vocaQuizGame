import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Control } from "react-hook-form";
import { RegisterFormType } from "@/types";

type FieldProps = {
  control: Control<RegisterFormType>; // Control 타입 설정
  name: keyof RegisterFormType; // 필드 이름
  type?: string;
  label?: string;
  placeholder?: string;
  description?: string;
  style?: string;
};

const InputField: React.FC<FieldProps> = ({
  control,
  name,
  type = "text",
  label,
  placeholder,
  description,
  style,
}) => {
  return (
    <FormField
      {...control}
      name={name}
      render={({ field }) => (
        <FormItem className="h-full">
          <FormLabel className="text-customDepBlueColor">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className={`w-full sm:w-full ${style}`} // 반응형 너비 설정
              type={type}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
