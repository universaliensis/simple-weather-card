function getStyles(css) {
  return css`
    ha-card {
      display: flex;
      flex-flow: row;
      align-items: center;
      padding: 10px;
      color: var(--primary-text-color, #000);
      font-weight: var(--swc-font-weight, 400);
      transition: background 1s;
      cursor: pointer;
    }
    ha-card[bg] {
      font-weight: var(--swc-font-weight, 500);
      background: var(--day-color);
      color: var(--text-color);
    }
    ha-card[bg][night] {
      background: var(--night-color);
    }
    ha-card[bg][fade] {
      background: linear-gradient(var(--day-color), transparent 250%);
    }
    ha-card[bg][fade][night] {
      background: linear-gradient(var(--night-color) 0%, transparent 300%);
    }
    .weather__icon {
      height: 100px;
      width: 100px;
      background-size: contain;
      background-repeat: no-repeat;
      flex: 0 0 100px;
      color: white;
      margin-right: 16px;
    }
    .weather__icon--small {
      display: inline-block;
      height: 1.5em;
      width: 1.5em;
      min-width: 1.5em;
      flex: initial;
      margin: 0 .2em;
    }
    .weather__info {
      display: flex;
      align-items:flex-start;
      align-content:flex-start;
      flex-flow: column;
      justify-content: space-between;
      min-height: 50px;
      min-width: 0;
    }
    .weather__info__row {
      display: flex;
      align-items: center;
      max-width: 100%;
      padding-top:2px;
    }
    .weather__info__item {
      padding: 10px;
      display: flex;
      align-items: center;
      font-size: 25px;
    }
    .weather__info--add {
      padding-left: 10px;
      margin-left: auto;
      align-items: flex-end;
      display: flex;

    }
    .weather__info__state {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 25px;
      padding:5px;
    }
    .weather__info__title {,
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 40px;
      line-height: 1;
    }
    .weather__info__row {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;
}

export default getStyles;
