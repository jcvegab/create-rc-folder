# create-rc-folder
Create a React Component folder with default file settings | Custom folder of Voldemort (Lernit Project)

## Params
* **Name <-n> (Required):** Is the name of React Component Folder to create,  preferably written on PascalCase.
* **Type <-t>:** Can be: "atoms" | "molecules" | "organisms". The type by default is "atoms".
* **Dir <-d>:** By default is `apps/root/src/components/UI`

The script concatenates Dir to `selected-type/name-of-component`

### Example
Command: `create-rc-folder -n Button`
This command generates this files:
- Button.tsx
- Button.module.scss
- index.ts


-> Generated `index.ts` File:
```
export { default } from './Button';
```

-> Generated `Button.module.scss` File:
```
.button{};
```

-> Generated `Button.tsx` File:
```
 import css from './Button.module.scss';

 type ButtonProps = {};
    
 const Button = (props: ButtonProps) => {
   const {} = props;
   return (<div className={css.button}></div>);
 };
    
 export default Button;```
