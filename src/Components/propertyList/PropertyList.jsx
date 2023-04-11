import './property.css'

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450095.jpeg?k=cd5e46e632dab722d22217813485efde31fbe82f5f26a624166edccdbe8187bc&o="
          alt="google.com"
          className='pListImg'
        />
        <div className="pListTitles">
          <h1>Boats</h1>
          <h2>2,003 boats</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450097.jpeg?k=eac0f917a53dc395bd379fef8c191e7d5e37012b68e60232e4f6bba2a2901b7a&o="
          alt=""
          className='pListImg'
        />
        <div className="pListTitles">
          <h1>Luxury tents</h1>
          <h2>5085 luxury tents</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450075.jpeg?k=d23cf8443780ac09f46f59e40393d75dbe64b06029b4959c60b81b7fdefc9be0&o="
          alt=""
          className='pListImg'
        />
        <div className="pListTitles">
          <h1>Self Catring</h1>
          <h2>233 self catring </h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57175023.jpeg?k=dc0319d4d64ded9ee4b0ddb162a2e80db7899300b7bf21b34506888895d74c79&o="
          alt=""
          className='pListImg'
        />
        <div className="pListTitles">
          <h1>Tiny houses</h1>
          <h2>846 Tiny houses</h2>
        </div>
      </div>
    </div>
  );
};
export default PropertyList;
