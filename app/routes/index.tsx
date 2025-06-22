// app/routes/special.tsx
import CenteredOrbWithButton from '../components/LandingButton';

export default function SpecialPage() {
  // Use the component, providing the link destination and text
  return (
    <CenteredOrbWithButton to="/home" text="Return Home" />
  );
}