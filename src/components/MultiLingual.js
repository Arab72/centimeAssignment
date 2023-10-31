import React, { useEffect, useState } from "react";
import { Menu, MenuItem, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function MultiLingual() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { t, i18n } = useTranslation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (changedLanguage) => {
    i18n.changeLanguage(changedLanguage);
    setAnchorEl(null);
  };

  return (
    <>
      <div className="col-lg-4 d-flex justify-content-end">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          style={{color: 'white' , marginLeft:20 } }
        >
          {t("language")}
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem value="en" onClick={() => handleClose("en")}>
            {t("English")}
          </MenuItem>
          <MenuItem value="fr" onClick={() => handleClose("fr")}>
            {t("French")}
          </MenuItem>
          <MenuItem value="js" onClick={() => handleClose("js")}>
            {t("Japanese")}
          </MenuItem>
        </Menu>
      </div>
    </>
  );
}

export default MultiLingual;
