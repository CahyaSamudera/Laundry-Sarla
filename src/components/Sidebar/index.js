import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/' smooth={true} duration={1000} onClick={toggle}>
          Beranda
        </SidebarLink>
        <SidebarLink
          to='layanan'
          smooth={true}
          duration={1000}
          onClick={toggle}
        >
          Layanan
        </SidebarLink>
        <SidebarLink
          to='testimoni'
          smooth={true}
          duration={1000}
          onClick={toggle}
        >
          Testimoni
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute
          to='contact'
          smooth={true}
          duration={1000}
          onClick={toggle}
        >
          Hubungi Kami
        </SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

// import React from 'react';
// import {
//   SidebarContainer,
//   Icon,
//   CloseIcon,
//   SidebarWrapper,
//   SidebarMenu,
//   SidebarLink,
//   SideBtnWrap,
//   SidebarRoute,
// } from './SidebarElements';

// const Sidebar = ({ isOpen, toggle }) => {
//   return (
//     <SidebarContainer isOpen={isOpen} onClick={toggle}>
//       <Icon onClick={toggle}>
//         <CloseIcon />
//       </Icon>
//       <SidebarWrapper>
//         <SidebarMenu>
//           <SidebarLink to='/' onClick={toggle}>
//             Beranda
//           </SidebarLink>
//           <SidebarLink to='layanan' onClick={toggle}>
//             Layanan
//           </SidebarLink>
//           <SidebarLink to='testimoni' onClick={toggle}>
//             Testimoni
//           </SidebarLink>
//         </SidebarMenu>
//         <SideBtnWrap>
//           <SidebarRoute to='contact' onClick={toggle}>
//             Hubungi Kami
//           </SidebarRoute>
//         </SideBtnWrap>
//       </SidebarWrapper>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;
