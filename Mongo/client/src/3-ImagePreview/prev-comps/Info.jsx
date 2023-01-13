import styles from './Info.module.css';

export default function Info() {
  return (
    <div className={styles.infoColumn}>
      <div className={styles.title}>Microsoft Elite Series 2 Controller - Starter Bundle</div>
      <a
        className={styles.brand}
        href="https://smile.amazon.com/Microsoft/b/ref=bl_dp_s_web_19823613011?ie=UTF8&node=19823613011&field-lbr_brands_browse-bin=Microsoft"
      >
        Brand: Microsoft
      </a>
      <div className={styles.dataBar}>
        <div className={styles.stars}></div> | <div className={styles.count}>2,432 ratings</div> |
        <div className={styles.count}>33 answered questions</div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.price}>
        <span className={styles.dollarSign}>$</span>
        <span className={styles.priceDollars}>218</span>
        <span classNAme={styles.priceCents}>99</span>
      </div>
      <div className={styles.wideOpenSpaces}></div>
      <div className={styles.dataBar}>
        Get $60 off instantly: Pay $159.90 upon approval for the Amazon Rewards Visa Card. No annual fee.
      </div>
      <div className={styles.wideOpenSpaces}></div>
      <div className={styles.papaDiv}>
        <div className={styles.boldFont}>
          <div>Brand</div>
          <div>Compatible Devices</div>
          <div>Controller Type</div>
          <div>Connectivity Technology</div>
          <div>Color</div>
        </div>
        <div className={styles.responseData}>
          <div>Microsoft</div>
          <div>Xbox One, Windows</div>
          <div>Gamepad</div>
          <div>Bluetooth</div>
          <div>Black</div>
        </div>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.about}>
        <div className={styles.aboutHeader}> About this item</div>
        <ul className={styles.ul}>
          <li>1 x Microsoft Xbox One Elite Series 2 Controller | 1 x Microfiber Cloth</li>
          <li>
            Designed to meet the needs of today's competitive gamers. Enhance your aiming with new adjustable-tension
            thumbsticks, shorter hair trigger locks, and a wrap-around rubberized grip.
          </li>
          <li>
            Tailor the controller to your preferred gaming style with new interchangeable thumbstick and paddle shapes.
            Save up to 3 custom profiles and 1 default profile on the controller and switch between them on the fly with
            the Profile button.
          </li>
          <li>
            Experience limitless customization with the Xbox Accessories app. Assign a button to act as a Shift key to
            enable alternative inputs for each of the other buttons.
          </li>
          <li>
            Stay in the game for longer with up to 40 hours of rechargeable battery life and re-engineered components
            that are built to last. Charge the controller either inside or outside the carrying case with the included
            USB-C cable and charging dock
          </li>
        </ul>
      </div>
    </div>
  );
}
