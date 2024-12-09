
# ApexCura Icons

**Apexcura Icons** is a lightweight and customizable icon library designed for modern web applications. With a simple class-based approach, you can easily integrate and use the icons in your project.

## Installation

Add the `apexcura-icons` script file to your project. You can either download it and include it manually. 

```html
<script src="https://dev.apexcura.com/api/public/scripts/apexcura.icons.js"></script>
```

## Usage

To use an icon, simply add an `<i>` tag with the appropriate class names. Each icon has a base class of `aci` and a unique class to identify the icon type.

### Example

```html
<i className="aci aci-bot"></i>
<i className="aci aci-settings"></i>
```

### Available Icons

Below is a list of all available icons and their corresponding class names:

| Icon Name        | Class Name            | Example HTML                        |
|-------------------|-----------------------|--------------------------------------|
| Bot              | `aci-bot`            | `<i className="aci aci-bot"></i>`   |
| Bot Hat          | `aci-bot-hat`        | `<i className="aci aci-bot-hat"></i>` |
| Call             | `aci-call`           | `<i className="aci aci-call"></i>`  |
| Code Snippet     | `aci-code-snippet`   | `<i className="aci aci-code-snippet"></i>` |
| Dashboard        | `aci-dashboard`      | `<i className="aci aci-dashboard"></i>` |
| Magnet Lead      | `aci-magnet-lead`    | `<i className="aci aci-magnet-lead"></i>` |
| Mail             | `aci-mail`           | `<i className="aci aci-mail"></i>` |
| Mega Phone       | `aci-mega-phone`     | `<i className="aci aci-mega-phone"></i>` |
| Settings         | `aci-settings`       | `<i className="aci aci-settings"></i>` |
| Shield           | `aci-shield`         | `<i className="aci aci-shield"></i>` |
| Report           | `aci-report`         | `<i className="aci aci-report"></i>` |
| User Clock       | `aci-user-clock`     | `<i className="aci aci-user-clock"></i>` |
| User Group       | `aci-user-group`     | `<i className="aci aci-user-group"></i>` |
| Whatsapp(Solid)  | `aci-whatsapp-solid` | `<i className="aci aci-whatsapp-solid"></i>` |

### Special Class Names

Apexcura Icons provides the following special class names for enhanced flexibility:

1. **`aci-no-colorize`**  
   This class prevents any color styles from being applied to the icon, allowing the icon's default styles to be displayed.

   **Example:**
   ```html
   <i className="aci aci-bot aci-no-colorize"></i>
   ```
2. **`aci-dynamic-size`**  
   This class allows dynamic sizing of icons by letting users apply additional styles such as Tailwind's `w-5` and `h-5` classes etc.

   **Example:**
   ```html
   <i className="aci aci-dashboard aci-dynamic-size w-5 h-5"></i>
   ```


## Contribution

Feel free to contribute to the project by:

- Adding new icons
- Improving the CSS
- Reporting issues or suggesting enhancements

