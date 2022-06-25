import React from "react";

function Description<T>({
  text,
  title,
  items,
  render,
}: {
  text?: string;
  title: string;
  items?: T[];
  render?: (item: T) => React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-sm uppercase font-semibold text-green-600 underline">
        {title}
      </h2>
      {text && (
        <p
          className="text-sm text-justify"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      )}
      {items ? (
        <ul>
          {items?.map((item, index) => (
            <React.Fragment key={index}>
              {render && render(item)}
            </React.Fragment>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Description;
