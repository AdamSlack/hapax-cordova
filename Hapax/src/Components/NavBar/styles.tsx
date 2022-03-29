import { createUseStyles  } from "react-jss";

const navBar = {
  flex: 1,
  alignSelf: 'flex-start',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
}

const navBarMobile = {
  ...navBar,
  position: 'fixed',
  width: '100vw',
  bottom: 0,
  justifyContent: 'center',
}

const navItemList = {
  display: 'flex',
  listStyle: 'none',
}

const navItemListMobile = {
  ...navItemList,
  flex: 1,
  padding: '0 2rem',
  justifyContent: 'space-around'
}

const navItem = {
  padding: '0 1rem',
  cursor: 'pointer',
}

const navItemMobile = {
  ...navItem
}

const useStyles = createUseStyles({
  navBar,
  navItemList,
  navItem,
  navBarMobile,
  navItemListMobile,
  navItemMobile,
})

export default useStyles;