import React from "react";

const mainNav = [
  { label: "Home", Icon: HomeIcon, isActive: true },
  { label: "Shorts", Icon: SparkIcon },
  { label: "Subscriptions", Icon: CollectionIcon },
  { label: "You", Icon: UserIcon },
];

const libraryNav = [
  { label: "History", Icon: ClockIcon },
  { label: "Playlist", Icon: PlaylistIcon },
  { label: "Watch Later", Icon: BookmarkIcon },
  { label: "Liked Videos", Icon: HeartIcon },
];

const exploreNav = [
  { label: "Shopping", Icon: BagIcon },
  { label: "Music", Icon: MusicIcon },
  { label: "Movies", Icon: FilmIcon },
  { label: "Live", Icon: BroadcastIcon },
  { label: "Gaming", Icon: GamepadIcon },
  { label: "News", Icon: NewsIcon },
  { label: "Sports", Icon: TrophyIcon },
  { label: "Chess", Icon: PuzzleIcon },
  { label: "Fashion & Beauty", Icon: SparkleIcon },
  { label: "Courses", Icon: BookIcon },
  { label: "Podcast", Icon: MicIcon },
];

const sections = [
  { title: "Main", items: mainNav },
  { title: "Library", items: libraryNav },
  { title: "Explore", items: exploreNav },
];

const Sidebar = () => {
  return (
    <aside className="w-64 shrink-0 border-r border-slate-200 bg-white/70 px-4 py-6 text-sm text-slate-700">
      {sections.map((section) => (
        <nav key={section.title} className="mb-6">
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
            {section.title}
          </p>
          <ul className="space-y-1">
            {section.items.map(({ label, Icon, isActive }) => (
              <li key={label}>
                <button
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 transition ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "hover:bg-slate-100"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      isActive ? "text-white" : "text-slate-500"
                    }`}
                  />
                  <span className="text-left">{label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ))}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
        <p className="font-semibold text-slate-600">Customize your feed</p>
        <p className="mt-1">
          Sign in to get the latest videos tailored to your interests.
        </p>
        <button className="mt-3 w-full rounded-xl bg-slate-900 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
          Sign in
        </button>
      </div>
    </aside>
  );
};

const iconClasses = "h-5 w-5";

function IconWrapper({ children, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${iconClasses} ${className}`}
    >
      {children}
    </svg>
  );
}

function HomeIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M3 11 12 3l9 8" />
      <path d="M5 10v10h14V10" />
    </IconWrapper>
  );
}

function SparkIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="m12 3 2 6h6l-5 4 2 6-5-3.5L7 19l2-6-5-4h6z" />
    </IconWrapper>
  );
}

function CollectionIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M7 3h10v4H7z" />
    </IconWrapper>
  );
}

function UserIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-3 4.5-5 8-5s6.5 2 8 5" />
    </IconWrapper>
  );
}

function ClockIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </IconWrapper>
  );
}

function PlaylistIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M4 6h12" />
      <path d="M4 10h12" />
      <path d="M4 14h7" />
      <path d="m17 9 4 2-4 2z" />
    </IconWrapper>
  );
}

function BookmarkIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M6 4h12v16l-6-3-6 3z" />
    </IconWrapper>
  );
}

function HeartIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10z" />
    </IconWrapper>
  );
}

function BagIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M6 7h12l1 12H5z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </IconWrapper>
  );
}

function MusicIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M9 18V5l10-2v13" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="16" r="2" />
    </IconWrapper>
  );
}

function FilmIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 5v14" />
      <path d="M17 5v14" />
    </IconWrapper>
  );
}

function BroadcastIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.48" />
      <path d="M7.76 7.76a6 6 0 0 0 0 8.48" />
      <path d="M19.07 4.93a9.5 9.5 0 0 1 0 13.44" />
      <path d="M4.93 4.93a9.5 9.5 0 0 0 0 13.44" />
    </IconWrapper>
  );
}

function GamepadIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <rect x="3" y="10" width="18" height="8" rx="4" />
      <path d="M7 14h2" />
      <path d="M8 13v2" />
      <circle cx="16" cy="14" r="1" />
      <circle cx="18" cy="14" r="1" />
    </IconWrapper>
  );
}

function NewsIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M4 5h16v14H4z" />
      <path d="M8 9h8" />
      <path d="M8 13h6" />
    </IconWrapper>
  );
}

function TrophyIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M8 21h8" />
      <path d="M10 21v-5a6 6 0 0 1-6-6V5h16v5a6 6 0 0 1-6 6v5" />
    </IconWrapper>
  );
}

function PuzzleIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M7 3h4v3a2 2 0 1 0 2 0V3h4v4h3v4h-3v2h3v4h-4v3h-4v-3a2 2 0 1 0-2 0v3H7v-4H4v-4h3v-2H4V7h3z" />
    </IconWrapper>
  );
}

function SparkleIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" />
      <path d="m15.6 15.6 2.8 2.8" />
      <path d="m18.4 5.6-2.8 2.8" />
      <path d="m8.4 15.6-2.8 2.8" />
      <circle cx="12" cy="12" r="3" />
    </IconWrapper>
  );
}

function BookIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v4H6.5A2.5 2.5 0 0 0 4 23z" />
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v12H6.5A2.5 2.5 0 0 0 4 16.5z" />
    </IconWrapper>
  );
}

function MicIcon({ className = "" }) {
  return (
    <IconWrapper className={className}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 10v2a7 7 0 0 0 14 0v-2" />
      <path d="M12 19v4" />
    </IconWrapper>
  );
}

export default Sidebar;
