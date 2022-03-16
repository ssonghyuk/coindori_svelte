<script lang="ts">
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      Dropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
      Icon
    } from 'sveltestrap';
  
    let isOpen = false;
  
    function handleUpdate(event) {
      isOpen = event.detail.isOpen;
    }
  </script>
  <Navbar color="primary" light expand="md" class="header">
    <div class="container">
      <NavbarBrand href="/"><span>Coindori</span></NavbarBrand>
      <NavbarToggler on:click={() => (isOpen = !isOpen)} />
      <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
          <Nav class="ms-auto" navbar>
          <NavItem>
              <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Join">Join</NavLink>
         </NavItem>
         <NavItem>
          <NavLink href="/">Logout</NavLink>
       </NavItem>
          <NavItem>
              <NavLink href="/Mypage"><Icon name="gear-fill" />Set</NavLink>
          </NavItem>
          <!-- <Dropdown nav inNavbar>
              <DropdownToggle nav caret>Options</DropdownToggle>
              <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
          </Dropdown> -->
          </Nav>
      </Collapse>
    </div>
  </Navbar>
