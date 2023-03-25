import Images from "./Images";
import Provider from "./Provider";


function Slider() {
  


  return (
    <Provider>
      {/* @ts-expect-error Server Component */}
      <Images />
    </Provider>
  );
}

export default Slider