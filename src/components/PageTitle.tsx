interface PageTitleProps {
  title: string;
}

export default function PageTitle({ title }: PageTitleProps): JSX.Element {
  return <h1 className="text-3xl font-semibold mb-2">{title}</h1>;
}
