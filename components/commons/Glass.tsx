type StackedBoxProp = {
  top?: string;
  right?: string;
};

export default function Glass({ top, right }: StackedBoxProp) {
  return (
    <div className={`glass group top-[${top}] right-[20%]`}>
      {/* <div className="glass glass-lg type-1 first group-hover:top-[-15px]"></div> */}
      {/* <div className="glass glass-lg type-1 second group-hover:top-[13px]"></div> */}
      <div className="glass glass-lg type-1 third"></div>
    </div>
  );
}
