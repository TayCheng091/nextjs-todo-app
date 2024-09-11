interface Props {
  context: string;
  style?: string;
}

function Tag({ context, style = "" }: Props) {
  return (
    <div
      className={`py-1.5 px-3 rounded-l-full rounded-r-full bg-border-color ${style}`}
    >
      {context}
    </div>
  );
}

export default Tag;
