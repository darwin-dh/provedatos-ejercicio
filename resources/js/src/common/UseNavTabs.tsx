import classnames from "classnames"
import { FC } from "react"
import { Nav, NavItem, NavLink } from "reactstrap"

interface Props {
  activeTab: string
  setactiveTab: any
  itemsTabs: any
  //style nav
  tabs?: boolean
  pills?: boolean
  justified?: boolean
  classNav?: string

}
const UseNavTabs: FC<Props> = ({ activeTab, setactiveTab, itemsTabs, tabs, pills, justified, classNav }) => {
  const toggle = (tab: string) => {
    if (activeTab !== tab) setactiveTab(tab)
  }

  return (
    <Nav tabs={tabs} pills={pills} justified={justified} className={classNav}>
      {
        (itemsTabs || []).map((item: any) => (
          <NavItem key={item.id}                    >
            <NavLink
              disabled={item.disabled}
              href="#"
              className={classnames({
                active: activeTab === item.id,
                'bg-gray fw-bold': activeTab === item.id,

              })}
              onClick={() => {
                toggle(item.id.toString())
              }}
            >
              {item.name}
            </NavLink>
          </NavItem>
        ))
      }
    </Nav>
  )
}

export default UseNavTabs