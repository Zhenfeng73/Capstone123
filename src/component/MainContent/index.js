function MainContent(){
    let name = "Trinh Hoai Thanh";
  const css = {
    // backgroundColor: "blue",
    // color: "red",
  };
    return (
        <>
            <div className="box">
            <div className="name" style={css}>
        Xin chao {name}
      </div>
            </div>
        </>
    )
}

export default MainContent;