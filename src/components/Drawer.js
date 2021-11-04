import { React, useEffect, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Drawer({ compareList, setCompareList, maxReached, setMaxReached }) {
    const [state, setState] = useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const removeDeal = (deal) => {
        compareList = compareList.filter(function (obj) {
            return obj['deal_id'] !== deal['deal_id'];
        });
        setCompareList(compareList)
        setMaxReached(false)

    }
    useEffect(() => {
        if (!maxReached) {
            if (compareList.length > 0) {
                setState({ bottom: true })
                setTimeout(function () { setState({ bottom: false }) }, 3000);
            }
        }
        else {
            setState({ bottom: true })
        }

    }, [compareList, maxReached]);

    return (
        <div>
            <SwipeableDrawer
                anchor={'bottom'}
                open={state['bottom']}
                onClose={toggleDrawer('bottom', false)}
                onOpen={toggleDrawer('bottom', true)}
            >
                <h2>Current Comparison List {maxReached ? '(Click on a deal to remove from list)': null}</h2>
                <List>
                    {compareList.map((deal) => {
                        return (
                            <ListItem button key={deal['provider_name']} onClick={() => removeDeal(deal)}>
                                <ListItemText primary={deal['provider_name']} />
                            </ListItem>)
                    })}
                </List>
                <Divider />
            </SwipeableDrawer>
        </div>
    );

}