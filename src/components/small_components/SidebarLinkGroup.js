import { useState } from 'react';

export default function SidebarLinkGroup(props) {
  const [open, setOpen] = useState(props.activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return <li>{props.children(handleClick, open)}</li>;
};