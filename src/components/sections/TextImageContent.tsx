import React from "react";
import {cn} from "@/lib/utils";

export type TextImageContentProps = {
  title?: string;
  description?: string;
  rtl?: boolean;
  className?: string;
  src: string;
};

const TextImageContent: React.FC<TextImageContentProps> = ({
  title = "Insert a title in the component call.",
  description = "Insert a description in the component call.",
  rtl = false,
  className,
  src = "https://picsum.photos/id/1084/1600/900"

}) => {
  return (
    <div className={cn(className)}>
      <div className={cn("mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8")}>
        <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center md:gap-12")}>
          <div className={cn(rtl ? "md:order-2" : "")}>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl text-balance">
                {title}
              </h2>

              <p className="mt-4 text-gray-700">{description}</p>
            </div>
          </div>
          <div className={cn("overflow-hidden aspect-video rounded-3xl", rtl ? "md:order-1" : "")}>
            <img
              src={src}
              className="object-cover w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextImageContent;
