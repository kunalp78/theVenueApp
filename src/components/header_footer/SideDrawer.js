import React from 'react';

import Drawer from '@material-ui/core/Drawer'; 
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.onClose(false)  }
        >
                <List component="nav">
                    <ListItem button onCLick={()=> console.log('Featured')}>
                        Event starts in
                    </ListItem>
                    <ListItem button onCLick={()=> console.log('Venue Info')}>
                        Venue Info
                    </ListItem>
                    <ListItem button onCLick={()=> console.log('HighLights')}>
                        HighLights
                    </ListItem>
                    <ListItem button onCLick={()=> console.log('Pricing')}>
                        Pricing
                    </ListItem>
                    <ListItem button onCLick={()=> console.log('Location')}>
                        Location
                    </ListItem>
                </List>
        </Drawer>
    );
};

export default SideDrawer;