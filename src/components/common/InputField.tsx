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

type FieldProps = {
  control: Control;
  name: string;
  label?: string;
  placeholder?: string;
  description?: string;
  style?: string;
};

const InputField: React.FC<FieldProps> = ({
  control,
  name,
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
        <FormItem className="">
          <FormLabel className="text-customDepBlueColor">{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              className={`w-full sm:w-full ${style}`} // 반응형 너비 설정
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
