export default props => {
  console.log('Body', props);
  const [Header, MainContent, Footer] = props.children;
  return (
    <React.Fragment>
      <div className="header-section">{Header}</div>
      <div className="main-content-section">{MainContent}</div>
      <div className="footer-section">{Footer}</div>
    </React.Fragment>
  );
};
