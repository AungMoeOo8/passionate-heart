type StackedBoxProp = {
  top?: string;
  right?: string;
};

export default function Glass({ top }: StackedBoxProp) {
  return (
    <div className={`glass group top-[${top}] right-[20%]`}>
      <div className="glass glass-lg type-1 third"></div>
    </div>
  );
}
