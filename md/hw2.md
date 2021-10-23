#hw2

##### 0. 心得甘苦談

<b><p style="color:blue">
第 4 題路由/shop_xx 不知道怎麼用，於是上網找資料，發現 HashRouter 可以解決問題，但是路由會變成/#/shop_xx。</p></b>

[<b><u><font color=red>參考資料</font></u></b>](https://ithelp.ithome.com.tw/articles/10226056)

---

##### 1. (local) 請以 App_xx.js 顯示下圖片，繳交

- ##### Chrome 截圖
- ##### 目錄結構及 App_xx 部分內容截圖 (以學號後 2 碼來展開 category 內容，其他收起)
- ##### App_xx.js code (程式碼，非圖片 )

![](https://i.imgur.com/LhKWtEm.jpg)
![](https://i.imgur.com/WYzspU6.png)

```js
import './App_01.scss';

function App_01() {
  return (
    <div>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <img
              className="background-image"
              src="https://i.ibb.co/cvpntL1/hats.png"
              alt=""
            />
            <a href="./hats.html" className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="menu-item">
            <img
              className="background-image"
              src="https://i.ibb.co/px2tCc3/jackets.png"
              alt=""
            />
            <a href="./jackets.html" className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="menu-item">
            <img
              className="background-image"
              src="https://i.ibb.co/0jqHpnp/sneakers.png"
              alt=""
            />
            <a href="./sneakers.html" className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="large menu-item">
            <img
              className="background-image"
              src="https://i.ibb.co/GCCdy8t/womens.png"
              alt=""
            />
            <a href="./womens.html" className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
          <div className="large menu-item">
            <img
              className="background-image"
              src="https://i.ibb.co/R70vBrQ/men.png"
              alt=""
            />
            <a href="./mens.html" className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">SHOP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App_01;
```

---

##### 2. (local) 將 homepage 分成如下圖的 components，Homepage_xx.js, Direcory_xx.js, MenuItem_xx.js，並且能夠正常顯示如第 1 題。繳交

- ##### Chrome 截圖
- ##### 目錄結構，要含所有用到的 components
- ##### Homepage_xx.js code (程式碼，非圖片 )
- ##### Directory_xx.js code
- ##### MenuItem_xx.js code

![](https://i.imgur.com/AkOrN25.jpg)
![](https://i.imgur.com/NwRBX0w.png)

##### <font color=blue>Homepage_xx.js code:</font>

```js
import React from 'react';
import Directory_01 from '../components/Directory_01.js';
import './Homepage_01.scss';
const Homepage_01 = () => {
  return (
    <div className="homepage">
      <Directory_01 />
    </div>
  );
};

export default Homepage_01;
```

##### <font color=blue>Directory_xx.js code:</font>

```js
import React, { useState } from 'react';
import MenuItem_01 from '../components/MenuItem_01';
import './Directory_01.scss';
import items from './menu-items-data';

const Directory_01 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);

  return (
    <div className="directory-menu">
      {menuItems.map((items) => {
        const { id, name, remoteUrl, size } = items;
        return (
          <MenuItem_01 key={id} name={name} remoteUrl={remoteUrl} size={size} />
        );
      })}
    </div>
  );
};

export default Directory_01;
```

##### <font color=blue>MenuItem_xx.js code:</font>

```js
import React from 'react';
import './MenuItem_01.scss';
const MenuItem_01 = ({ name, remoteUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <img className="background-image" src={remoteUrl} alt="" />
      <a href="./hats.html" className="content">
        <h1 className="title">{name}</h1>
        <span className="subtitle">SHOP NOW</span>
      </a>
    </div>
  );
};

export default MenuItem_01;
```

---

##### 3. (local) 將 menu items 五筆資料放入 JSON 陣列中，並能正常顯示如第 1 題。繳交

- ##### Chrome 截圖
- ##### JSON 陣列 (程式碼，非圖片 )
- ##### Directory_xx.js code (程式碼，非圖片 )

![](https://i.imgur.com/twpTkCs.jpg)

##### <font color=blue>JSON 陣列:</font>

```js
const items = [
  {
    id: 1,
    name: 'HATS',
    remoteUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    size: '',
  },
  {
    id: 2,
    name: 'JACKETS',
    remoteUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    size: '',
  },
  {
    id: 3,
    name: 'SNEAKERS',
    remoteUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    size: '',
  },
  {
    id: 4,
    name: 'WOMENS',
    remoteUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
  },
  {
    id: 5,
    name: 'MENS',
    remoteUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    size: 'large',
  },
];

export default items;
```

##### <font color=blue>Directory_xx.js code:</font>

```js
import React, { useState } from 'react';
import MenuItem_01 from '../components/MenuItem_01';
import './Directory_01.scss';
import items from './menu-items-data';

const Directory_01 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuItems', menuItems);

  return (
    <div className="directory-menu">
      {menuItems.map((items) => {
        const { id, name, remoteUrl, size } = items;
        return (
          <MenuItem_01 key={id} name={name} remoteUrl={remoteUrl} size={size} />
        );
      })}
    </div>
  );
};

export default Directory_01;
```

---

##### 4. (local, github) 實作路由 /shop_xx，可以顯示 overview.html 內兩種 category 的資訊 (c1, c2)，每一 category 要顯示 4 筆資料。c1, c2 由學號後兩碼來決定，顯示順序先 c1 再 c2，說明如下：

##### 1, 6 -- hats

##### 2, 7 -- jackets

##### 3, 8 -- sneakers

##### 4, 9 -- womens

##### 5, 0 -- mens

##### 如果 c1 = c2 兩個相同，那 c2 就取下一個。要繳交

- ##### 說明 c1, c2 那是坐那兩個
- ##### local 端 Chrome 執行結果截圖
- ##### Github page 執行結果截圖
- ##### 重要相關的原始程式碼

##### <font color=blue>c1, c2 是 Mens 和 Hats</font>

![](https://i.imgur.com/koWR97U.jpg)
![](https://i.imgur.com/H8estQL.jpg)

##### <font color=blue>CollectionPreview_01:</font>

```js
import React from 'react';
import CollectionItem_01 from '../CollectionItem_01/CollectionItem_01';
import './CollectionPreview_01.scss';

const CollectionPreview_01 = () => {
  return (
    <div className="collection-preview">
      <h2 className="title">Mens</h2>
      <div className="preview">
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/xJS0T3Y/camo-vest.png"
          name=" Camo Down Vest"
          price="325"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/qMQ75QZ/floral-shirt.png"
          name="Floral T-shirt"
          price="20"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/55z32tw/long-sleeve.png"
          name="Black & White Longsleeve"
          price="25"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/RvwnBL8/pink-shirt.png"
          name="Pink T-shirt"
          price="25"
        />
      </div>
      <h2 className="title">Hats</h2>
      <div className="preview">
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/ZYW3VTp/brown-brim.png"
          name="Brown Brim"
          price="25"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/ypkgK0X/blue-beanie.png"
          name="Blue Beanie"
          price="18"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/QdJwgmp/brown-cowboy.png"
          name="Brown Cowboy"
          price="35"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/RjBLWxB/grey-brim.png"
          name="Grey Brim"
          price="25"
        />
      </div>
    </div>
  );
};

export default CollectionPreview_01;
```

##### <font color=blue>CollectionItem_01:</font>

```js
import React from 'react';
import './CollectionItem_01.scss';

const CollectionItem_01 = ({ remoteUrl, name, price }) => {
  return (
    <div>
      <div className="collection-item">
        <img className="image" src={remoteUrl} />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <button className="custom-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default CollectionItem_01;
```

---

##### 5. 將目前所完成的 React code 放入 Github 中，建立的 repository 要顯示 id 資訊。要繳交

- ##### repository URL 及截圖，可以看到你的原始程式碼，
- ##### Github page 設定之截圖
- ##### Github page URL 及截圖，可以執行 React 程式

##### 以上截圖，都必須有網址列，如 HW1，上面會顯示 github page 的資訊。

[<b><u><font color=red>repository URL</font></u></b>](https://github.com/209410801/react-1101-crown-209410801)
![](https://i.imgur.com/PAbjy4t.png)
[<b><u><font color=red>Github page URL</font></u></b>](https://209410801.github.io/react-1101-crown-209410801/)
![](https://i.imgur.com/k8XkstZ.jpg)

---

##### 6. (local) 加入 header，能顯示 logo 及選單，

##### -- 點選 logo，會回到主頁 (路由 /)

##### -- 點選 Shop，會到 Shop Overview Page (路由 /shop_xx)，要能顯示上面第 4 題的內容

##### -- 點選 Contact，會到 Contact Page (路由 /contact_xx)

##### -- 點選 Contact，會到 Signin Page (路由 /signin_xx)

##### 要繳交

- ##### local 端 Chrome /shop_xx 執行結果截圖
- ##### local 端 Chrome /contact 執行結果截圖
- ##### 跟路由 /shop_xx 有關的原始程式碼

![](https://i.imgur.com/Dm7rrTs.jpg)
![](https://i.imgur.com/N3mHtGt.png)

##### <font color=blue>shop_01:</font>

```js
import React from 'react';
import ShopOverviewPage_01 from './pages/ShopOverviewPage_01/ShopOverviewPage_01.js';
import './shop_01.scss';

const shop_01 = () => {
  return (
    <div>
      <ShopOverviewPage_01 />
    </div>
  );
};

export default shop_01;
```

##### <font color=blue>ShopOverviewPage_01:</font>

```js
import React from 'react';
import CollectionOverview_01 from '../../components/CollectionOverview_01/CollectionOverview_01';
import './ShopOverviewPage_01.scss';

const ShopOverviewPage_01 = () => {
  return (
    <div className="shop-page">
      <CollectionOverview_01 />
    </div>
  );
};

export default ShopOverviewPage_01;
```

##### <font color=blue>CollectionOverview_01:</font>

```js
import React from 'react';
import CollectionPreview_01 from '../CollectionPreview_01/CollectionPreview_01';
import './CollectionOverview_01.scss';

const CollectionOverview_01 = () => {
  return (
    <div className="collection-overview">
      <CollectionPreview_01 />
    </div>
  );
};

export default CollectionOverview_01;
```

##### <font color=blue>CollectionPreview_01:</font>

```js
import React from 'react';
import CollectionItem_01 from '../CollectionItem_01/CollectionItem_01';
import './CollectionPreview_01.scss';

const CollectionPreview_01 = () => {
  return (
    <div className="collection-preview">
      <h2 className="title">Mens</h2>
      <div className="preview">
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/xJS0T3Y/camo-vest.png"
          name=" Camo Down Vest"
          price="325"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/qMQ75QZ/floral-shirt.png"
          name="Floral T-shirt"
          price="20"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/55z32tw/long-sleeve.png"
          name="Black & White Longsleeve"
          price="25"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/RvwnBL8/pink-shirt.png"
          name="Pink T-shirt"
          price="25"
        />
      </div>
      <h2 className="title">Hats</h2>
      <div className="preview">
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/ZYW3VTp/brown-brim.png"
          name="Brown Brim"
          price="25"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/ypkgK0X/blue-beanie.png"
          name="Blue Beanie"
          price="18"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/QdJwgmp/brown-cowboy.png"
          name="Brown Cowboy"
          price="35"
        />
        <CollectionItem_01
          remoteUrl="https://i.ibb.co/RjBLWxB/grey-brim.png"
          name="Grey Brim"
          price="25"
        />
      </div>
    </div>
  );
};

export default CollectionPreview_01;
```

##### <font color=blue>CollectionItem_01:</font>

```js
import React from 'react';
import './CollectionItem_01.scss';

const CollectionItem_01 = ({ remoteUrl, name, price }) => {
  return (
    <div>
      <div className="collection-item">
        <img className="image" src={remoteUrl} />
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
        </div>
        <button className="custom-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default CollectionItem_01;
```

---

##### 7. (heroku) 在 Heroku 上要能顯示第 6 題的 header。要繳交

- ##### Heroku 上 Chrome /shop_xx 執行結果截圖

![](https://i.imgur.com/r14eu1j.jpg)

---

##### 8. (local) 首頁 category 五筆資料，能夠透過你個人放在 Heroku /api_xx/category_xx 取得。如果無法成功，可以先用老師的測試。

https://crown1101.herokuapp.com/api_xx/category_xx

##### 要繳交

- ##### local 執行結果
- ##### Directory2_xx 相關程式截圖
- ##### Heroku app URL
- ##### Heroku Database URL

![](https://i.imgur.com/c70hmhZ.jpg)

##### <font color=blue>Directory2_xx:</font>

```js
import React, { useState, useEffect } from 'react';
import MenuItem2_01 from '../MenuItem2_01/MenuItem2_01';
import axios from 'axios';
import './Directory2_01.scss';

function Directory2_01() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL =
        'https://db-1101-crown-01.herokuapp.com/api_01/category_01';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_01/category_01', data);
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  return (
    <div className="directory-menu">
      {menuItems.map((item) => {
        const { id, name, remote_url, size } = item;
        return (
          <MenuItem2_01
            key={id}
            name={name}
            remote_url={remote_url}
            size={size}
          />
        );
      })}
    </div>
  );
}
export default Directory2_01;
```

[<b><u><font color=red>Heroku app URL</font></u></b>](https://react-1101-crown-209410801.herokuapp.com/)

##### <font color=blue>Heroku Database URL:</font>

postgres://awmebvhvoekhko:387988bd19d16e47964841ef0ee64588020004ba26d37a646c7ab5e05100aa34@ec2-3-221-100-217.compute-1.amazonaws.com:5432/dc53ck4j8vvppi

---

##### 9. (Github page) 上第 8 題，請將程式碼發佈到 github page，並能直接從 Github page 執行，自 Heroku /api_xx/category_xx 取得 category 五筆資料，要繳交

- ##### Github repo URL
- ##### Github page URL
- ##### Chrome 圖片有關 Github page 執行路由 / 結果
- ##### Chrome 圖片有關 Github page 執行路由 /shop_xx 結果

[<b><u><font color=red>Github repo URL</font></u></b>](https://github.com/209410801/react-1101-crown-209410801)
[<b><u><font color=red>Github page URL</font></u></b>](https://209410801.github.io/react-1101-crown-209410801/shop_01)
![](https://i.imgur.com/AFyWSqo.jpg)
![](https://i.imgur.com/7SQ5nsH.jpg)
