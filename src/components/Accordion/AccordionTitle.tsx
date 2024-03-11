type AccordionTitlePropsType = {
    title: string
    toggleCollapsed: (value: boolean) => void
    isCollapsed: boolean
  }

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log("AccordionTitle render");

  return <h3 onClick={() => props.toggleCollapsed(!props.isCollapsed)}>--- {props.title} ---</h3>;
}

export default AccordionTitle;