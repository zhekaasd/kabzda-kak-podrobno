

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle render");

  return <h1>{props.title}</h1>;
}

export default PageTitle;