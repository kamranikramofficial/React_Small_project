const WelcomeMessage = ({OnGetClick}) => {
  return (
    <center className="mt-4 fs-3">
      <h1>There are no posts</h1>
    
    <button type="button" 
    onClick={OnGetClick}
    className="btn btn-info">Add Data Throw Fatch</button>

    </center>
  );
};

export default WelcomeMessage;