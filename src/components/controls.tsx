interface ControlPanelProps {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface SpecialControlPanelForAdminsOnly extends ControlPanelProps {
  isAdmin: true;
}

type AdminControls = ControlPanelProps | { admin: true };

const ControlPanel = ({ name, onChange }: ControlPanelProps) => {
  return (
    <form
      className="bg-primary-10 flex flex-row gap-4 text-white"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default ControlPanel;
