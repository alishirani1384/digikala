import Images from "./Images";
import Provider from "./Provider";


function BannerSlider() {
  


  return (
    <Provider>
      {/* @ts-expect-error Server Component */}
      <Images />
    </Provider>
  );
}

export default BannerSlider