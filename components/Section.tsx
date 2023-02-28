import React, {ReactNode} from "react";

const Section: React.FC<{
    title: string, parentClassName?: string, titleClassName?: string, children: ReactNode
}> = ({
          title,
          parentClassName,
          titleClassName,
          children
      }) => {
    return <section className={`flex flex-col ${parentClassName}`}>
        <h1 className={titleClassName || 'text-5xl font-semibold border-b-4 border-black w-max'}>{title}</h1>
        {children}
    </section>
}

export default Section