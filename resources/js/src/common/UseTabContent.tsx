import { FC } from 'react'
import { TabContent, TabPane } from 'reactstrap'

interface ITabPane {
    tabId: string
    componetent: JSX.Element

}

interface IProps {
    activeTab: string
    listTabPane: ITabPane[]
}
const UseTabContent: FC<IProps> = ({ activeTab, listTabPane }) => {

    const listTabs = [{ tabId: "1", componetent: <div>Vacio</div> }]

    return (

        <TabContent activeTab={activeTab}>
            {(listTabPane || listTabs).map((item, key) => (
                <TabPane key={key} tabId={item.tabId} >
                    {item.componetent}
                </TabPane>))}
        </TabContent>

    )
}

export default UseTabContent