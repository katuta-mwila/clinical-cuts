import { ComponentType } from "react";

type QuickMapProps<T extends object> = {
  objects: T[];
  componentTag: ComponentType<T>;
  className?: string
};

export default function QuickMap<T extends object>({objects, componentTag: ComponentTag, className}: QuickMapProps<T>) {

  if (className){
    return <div className={className}>
      {objects.map((obj, i) => (
        <ComponentTag key={i} {...obj} />
      ))}
    </div>
  }

  return objects.map((obj, i) => (
    <ComponentTag key={i} {...obj} />
  ))
}