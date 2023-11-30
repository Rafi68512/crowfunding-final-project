const ProgressBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { completed } = props;

  const containerStyles = {
    height: 10,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 20,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#1DAA97",
    borderRadius: "inherit",
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  //   const labelStyles = {
  //     padding: 5,
  //     color: "white",
  //     fontWeight: "bold",
  //   };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>{/* <span style={labelStyles}>{`${50}%`}</span> */}</div>
    </div>
  );
};

export default ProgressBar;
