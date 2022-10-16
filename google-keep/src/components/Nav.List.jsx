import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { LightbulbOutlined as Lightbulb,SearchOutlined as Search,EditOutlined  as Edit,NotificationsActiveOutlined as NotificationsActive, ArchiveOutlined as Archive, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from 'react-router-dom';

const NavList = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: '/' },
        {id:2,name:'Search',icon:<Search/>,route:'/search'},
        {id:3,name:'Remainder',icon:<NotificationsActive/>,route:'/notificationActive'},
        { id: 4, name: 'Archives', icon: <Archive />, route: '/archive' },
        { id: 5, name: 'Trash', icon: <Delete />, route: '/delete' },
        {id:6,name:'Edit',icon:<Edit/>, route:'/'},
    ]
    
    return (
        <List>
        {
            navList.map(list => (
                <ListItem button key={list.id}>
                    <Link to={`${list.route}`} style={{ textDecoration: 'none', display: 'flex', color: 'inherit'}}>
                        <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                    </Link>
                </ListItem>
            ))
        }
        </List>
    )
}

export default NavList;
