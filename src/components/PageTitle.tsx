

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle render");

  return <h1>
    This is App 
      <span style={{color: props.title.trim() === 'controlled' ? 'blue' : 'darkRed'}}>
        {props.title.toUpperCase()}
      </span> 
      components
  </h1>;
}

export default PageTitle;