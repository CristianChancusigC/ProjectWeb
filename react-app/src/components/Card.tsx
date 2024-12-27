import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Card(props: Props) {
  const { children } = props;

  const width = {
    width: "18rem",
  };
  return (
    <div className="card" style={width}>
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  subtitle: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, subtitle, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{subtitle}</h6>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
