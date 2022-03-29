import { Switch, SwitchEvent } from '@nextui-org/react';
import { useIsMobile } from '../../Hooks/useIsMobile';
import { SetTheme } from '../../Hooks/useTheme';
import useStyles from './styles'


const navItems = [
  'Home',
  'About',
  'Profile',
]

export const GRID_TEXT_GRADIENT = '45deg, #AAFFEC -77%, #ff4ecd 20%, #0070F3 120%';
export const GRID_TEXT_HOVER_GRADIENT = '45deg, #88ddba -77%, #dd1ba9 20%, #0050d1 120%';
export const TEXT_GRADIENT = '90deg, #AAFFEC -20%, #ff4ecd 0%, #0070F3 20%';

export type NavBarProps = {
  onThemeChange: SetTheme
}

export const NavBar = (props: NavBarProps) => {
  const { onThemeChange } = props
  const styles = useStyles();
  const { isMobile } = useIsMobile();

  const handleThemeChange = (event: SwitchEvent) => {
    const { target: { checked }} = event;
    onThemeChange(checked ? 'light' : 'dark')
  }

  return (
    <nav className={isMobile ? styles.navBarMobile : styles.navBar}>
      {!isMobile && (<h1>Logo</h1>)}
      <ul className={isMobile ? styles.navItemListMobile : styles.navItemList}>
        {navItems.map(( item ) => <li key={item} className={isMobile ? styles.navItemMobile :styles.navItem}>{item}</li>)}
        <li>
        <Switch
            color='warning'
            size='lg'
            onChange={handleThemeChange}
            iconOn={'🌞'}
            iconOff={'🌜'}
            css={{
              color: '$pink600',
              '[data-state="checked"]': {
                background: `linear-gradient(${GRID_TEXT_GRADIENT})`,
              },
              '[data-state="checked"]:hover': {
                background: `linear-gradient(${GRID_TEXT_HOVER_GRADIENT}) !important`
              }
            }}
          />
        </li>
      </ul>
    </nav>
  )
};
