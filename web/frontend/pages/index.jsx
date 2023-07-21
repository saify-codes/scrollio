import {
  Page,
  Layout,
  LegacyCard,
  Grid,
  VerticalStack,
  Text,
  Button,
  Box,
  HorizontalStack,
  FormLayout,
  TextField,
  Select,
} from "@shopify/polaris";
import { ExternalMinor } from "@shopify/polaris-icons";
import { useState } from "react";
import Rating from "../components/Rating";

const fonts = [
  { label: "monospace", value: "monospace" },
  { label: "serif", value: "serif" },
  { label: "cursive", value: "cursive" },
];
const fontStyles = [
  { label: "Italic", value: "italic" },
  { label: "Normal", value: "normal" },
  { label: "Oblique", value: "oblique" },
];

export default function HomePage() {
  const [status, setStatus] = useState(true);
  const [font, setFont] = useState("cursive");
  const [fontstyle, setFontStyle] = useState("normal");
  const [bordersize, setBorderSize] = useState(0);
  const [bordercolor, setBorderColor] = useState("#000000");
  const [borderradius, setBorderRadius] = useState(0);
  const [backgroundcolor, setBackgroundColor] = useState("#FFFFFF");
  const [fontsize, setFontSize] = useState(18);
  const [fontcolor, setFontColor] = useState("#FF0000");
  const [buttontext, setButtonText] = useState("Loading...");

  const handleSelectFontFamily = (value) => setFont(value);
  const handleSelectFontStyle = (value) => setFontStyle(value);
  const handleSetButtonText = (value) => setButtonText(value.trim());
  const handleSetFontSize = (value) => setFontSize(value);
  const handleSetFontColor = (value) => setFontColor(value);
  const handleSetBackgroundColor = (value) => setBackgroundColor(value);
  const handleSetBorderRadius = (value) => setBorderRadius(value);
  const handleSetBorderColor = (value) => setBorderColor(value);
  const handleSetBorderSize = (value) => setBorderSize(value);
  const handleSetStaus = () => {
    console.log(status);
    setStatus(!status);
  };
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <HorizontalStack blockAlign="end" gap="2" align="space-between">
            <Rating />
            <HorizontalStack gap="2">
              <Button size="medium" outline icon={ExternalMinor}>
                Help Guide
              </Button>
              <Button size="medium" primary>
                Need Support
              </Button>
            </HorizontalStack>
          </HorizontalStack>
        </Layout.Section>
        <Layout.Section>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 3 }}>
              <VerticalStack gap="10">
                <Box>
                  <Text variant="headingLg">Application Status</Text>
                  <Text color="subdued">Enable or disable, Scrollio</Text>
                </Box>
                <Box>
                  <Text variant="headingLg">Button or Auto-Load</Text>
                  <Text color="subdued">
                    Show a "Load More" button or Auto-Load the products
                  </Text>
                </Box>
                <Box>
                  <Text variant="headingLg">Preview</Text>
                  <Text color="subdued">
                    Customize the look of your scroll loading and “Load More”
                    button
                  </Text>
                </Box>
              </VerticalStack>
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 6, lg: 9 }}>
              <VerticalStack>
                <LegacyCard sectioned>
                  <HorizontalStack blockAlign="center" align="space-between">
                    <Text fontWeight="medium">
                      The application is{" "}
                      <span
                        style={{
                          color: status
                            ? "var(--p-color-bg-success-strong)"
                            : "var(--p-color-bg-critical-strong)",
                          textDecorationLine: "underline",
                        }}
                      >
                        {status ? "Enable" : "Disable"}
                      </span>{" "}
                      Click the button to {status ? "Disable" : "Enable"}
                    </Text>
                    <Button destructive onClick={handleSetStaus}>
                      {status ? "Disable" : "Enable"}
                    </Button>
                  </HorizontalStack>
                </LegacyCard>

                <LegacyCard sectioned>
                  <HorizontalStack blockAlign="center" align="space-between">
                    <Text fontWeight="medium">
                      The "Load More" button is showing
                    </Text>
                    <Button primary>Auto Load</Button>
                  </HorizontalStack>
                </LegacyCard>

                <LegacyCard sectioned>
                  <VerticalStack gap="5">
                    {/* border size and color */}
                    <FormLayout>
                      <FormLayout.Group>
                        <TextField
                          type="number"
                          label="Border size"
                          min={0}
                          max={10}
                          value={bordersize}
                          onChange={handleSetBorderSize}
                        />
                        <TextField
                          type="color"
                          label="Border color"
                          value={bordercolor}
                          onChange={handleSetBorderColor}
                        />
                      </FormLayout.Group>
                    </FormLayout>

                    {/* border radius and background color */}
                    <FormLayout>
                      <FormLayout.Group>
                        <TextField
                          type="number"
                          label="Border radius"
                          value={borderradius}
                          min={0}
                          max={10}
                          onChange={handleSetBorderRadius}
                        />
                        <TextField
                          type="color"
                          label="Background color"
                          value={backgroundcolor}
                          onChange={handleSetBackgroundColor}
                        />
                      </FormLayout.Group>
                    </FormLayout>

                    {/* font size and color */}
                    <FormLayout>
                      <FormLayout.Group>
                        <TextField
                          type="number"
                          label="Font size"
                          value={fontsize}
                          min={10}
                          max={25}
                          onChange={handleSetFontSize}
                        />
                        <TextField
                          type="color"
                          label="Font color"
                          value={fontcolor}
                          onChange={handleSetFontColor}
                        />
                      </FormLayout.Group>
                    </FormLayout>

                    {/* font family and style */}
                    <FormLayout>
                      <FormLayout.Group>
                        <Select
                          label="Google font family"
                          options={fonts}
                          onChange={handleSelectFontFamily}
                          value={font}
                        />
                        <Select
                          label="Font style"
                          options={fontStyles}
                          onChange={handleSelectFontStyle}
                          value={fontstyle}
                        />
                      </FormLayout.Group>
                    </FormLayout>

                    {/* text and animation */}
                    <FormLayout>
                      <FormLayout.Group>
                        <TextField
                          type="text"
                          label="Button text"
                          value={buttontext}
                          minLength={20}
                          onChange={handleSetButtonText}
                        />
                        <TextField
                          type="url"
                          label="Loading animation"
                          helpText={<HelpText />}
                        />
                      </FormLayout.Group>
                    </FormLayout>

                    {/* live preview */}
                    <Preview
                      text={buttontext}
                      bg={backgroundcolor}
                      color={fontcolor}
                      size={fontsize}
                      style={fontstyle}
                      r={borderradius}
                      borderwidth={bordersize}
                      bordercolor={bordercolor}
                      font={font}
                    />

                    {/* save changes */}
                    <HorizontalStack align="end">
                      <Button loading={false} primary>
                        Save
                      </Button>
                    </HorizontalStack>
                  </VerticalStack>
                </LegacyCard>
              </VerticalStack>
            </Grid.Cell>
          </Grid>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

function Preview(props) {
  let { text, style, size, color, bg, r, borderwidth, bordercolor, font } =
    props;
  return (
    <>
      <VerticalStack>
        <Text>Live preview</Text>
        <Box paddingBlockStart="5" paddingBlockEnd="5">
          <button
            style={{
              fontStyle: style,
              fontSize: size + "px",
              color,
              background: bg,
              borderRadius: r + "px",
              border: `${borderwidth}px solid ${bordercolor}`,
              fontFamily: font,
              padding: ".25rem .5rem",
            }}
          >
            {text}
          </button>
        </Box>
      </VerticalStack>
    </>
  );
}

function HelpText() {
  return (
    <>
      Check out our{" "}
      <a href="#" style={{ color: "var(--p-color-bg-primary" }}>
        help guide
      </a>{" "}
      on how to set this up
    </>
  );
}
