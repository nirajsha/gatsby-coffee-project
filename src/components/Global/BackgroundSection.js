import React from "react"
import BackgroundImage from "gatsby-background-image"
export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children} {/*to add something else like button (children is used)*/}
    </BackgroundImage>
  )
}
BackgroundSection.defaultProps = {
  //for background default props is used
  title: "default title",
  styleClass: "default-background",
}
