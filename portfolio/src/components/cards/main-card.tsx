import CardWrapper from "./card-wrapper";

const MainCard = () => {
  return (
    <CardWrapper
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
        textAlign: "center",
        fontSize: "30px",
        width: "60%",
        margin: "0 auto",
        marginBottom: "20px",
        color: "white",
        minHeight: "100px",
      }}
    >
      <h2>Velikosky</h2>
    </CardWrapper>
  );
};

export default MainCard;
