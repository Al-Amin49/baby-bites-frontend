import { Button } from "@nextui-org/react";
import { ReactNode } from "react";

interface PrimaryButtonProps {
  btnText: string;
  Icon?: ReactNode;
}

const PrimaryButton = ({ btnText, Icon }: PrimaryButtonProps) => {
  return (
    <Button
      className="bg-primary text-white font-bold flex items-center"
      variant="bordered"
    >
      {Icon && <span className="mr-1">{Icon}</span>}
      {btnText}
    </Button>
  );
};

export default PrimaryButton;