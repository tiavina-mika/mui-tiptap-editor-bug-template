import {
  Container,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { TextEditor } from "mui-tiptap-editor";

const mentions = [
  { label: "Lea Thompson", value: "xxxx1" },
  { label: "Cyndi Lauper", value: "xxxx2" },
  { label: "Tom Cruise", value: "xxxx3" },
];

const currentUser = mentions[0];

const theme = createTheme({
  palette: {
    mode: "light"
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
          <TextEditor
            value="<p>Hello word!</p>"
            label="Content"
            mentions={mentions}
            user={currentUser}
          />
      </Container>
    </ThemeProvider>
  );
};

export default App;
