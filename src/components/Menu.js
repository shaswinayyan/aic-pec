import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
    <MenuContainer>
      <ContentWrapper>
        <MenuItems>
          <MenuItem href="/home">Home</MenuItem>
          <DropdownMenuItem>
          <MenuItem href="/portfolio">Portfolio</MenuItem>
            <DropdownContent>
              <DropdownItem   as={Link} to="/startupdetails">Startup Details</DropdownItem>
              <DropdownItem href="/studentsproject">Students Project</DropdownItem>
            </DropdownContent>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MenuItem href="/programs">Programs</MenuItem>
            <DropdownContent>
              <DropdownItem  as={Link} to="/pre-incubate">Pre-Incubate</DropdownItem>
                
              <DropdownItem href="/incubate">Incubate</DropdownItem>
              <DropdownItem href="/incubation">Incubation</DropdownItem>
              <DropdownItem href="/ip-facilities">IP Facilities</DropdownItem>
            </DropdownContent>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <MenuItem href="/partners">Partners</MenuItem>
            <DropdownContent>
              <DropdownItem href="/academicpartner">Academic Partners</DropdownItem>
              <DropdownItem href="/co-operativepartners">Co-operative Partners</DropdownItem>
              <DropdownItem href="/ipsupporters">IP Supporters</DropdownItem>
              <DropdownItem href="/networkingpartners">Networking Partners</DropdownItem>
              <DropdownItem href="/investmentpartners">Investment Partners</DropdownItem>
              <DropdownItem href="/meetourteam">Meet our team</DropdownItem>
            </DropdownContent>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <MenuItem href="/events">Events</MenuItem>
            <DropdownContent>
              <DropdownItem href="/upcomingevents">Upcoming Events</DropdownItem>
              <DropdownItem href="/outreachevents">Outreach Events</DropdownItem>
              <DropdownItem href="/eventgallery">Event Gallery</DropdownItem>
              <DropdownItem href="/register">Register</DropdownItem>
              <DropdownItem href="/summary">Summary</DropdownItem>
            </DropdownContent>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <MenuItem href="/funding">Funding</MenuItem>
            <DropdownContent>
              <DropdownItem href="/sisfs">SISFS</DropdownItem>
              <DropdownItem href="/proplex">PROPLEX</DropdownItem>
              <DropdownItem href="/aimseedinvestments">Aim Seed Investments</DropdownItem>
              <DropdownItem href="/externalfunding">External Funding Support</DropdownItem>
            </DropdownContent>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <MenuItem  as={Link} to="/tender">Tenders</MenuItem>
            <DropdownContent>
              <DropdownItem href="/ongoing">Ongoing</DropdownItem>
              <DropdownItem href="/closed">Closed</DropdownItem>
            </DropdownContent>
          </DropdownMenuItem>
          <MenuItem href="/contact">Contact Us</MenuItem>
        </MenuItems>
      </ContentWrapper>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff; /* Changed background color to match the navbar */
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 80px; /* Adjust based on Navbar height */
  left: 0; /* Adjusted to make the menu span the entire width */
  z-index: 999;
`;

const ContentWrapper = styled.div`
  max-width: 1000px; /* Adjust the max-width as needed */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItems = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const MenuItem = styled.a`
  color: #12283c; /* Changed text color to match the navbar */
  text-decoration: none;
  margin: 0 15px;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1em;

  &:hover {
    color: orange;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  min-width: 160px;
  z-index: 1;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;

    &:hover {
      background-color: #ddd;
      color: orange;
    }
  }
`;

const DropdownMenuItem = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
  }
`;

const DropdownItem = styled.a`
  color: #12283c; /* Changed text color to match the navbar */
  text-decoration: none;
  padding: 12px 16px;
  display: block;

  &:hover {
    background-color: #ddd;
    color: orange;
  }
`;


export default Menu;
