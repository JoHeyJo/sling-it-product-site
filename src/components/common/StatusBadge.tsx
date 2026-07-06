export type FeatureStatus = "shipped" | "in-progress" | "planned";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodePullRequest } from "@fortawesome/free-solid-svg-icons";

function StatusBadge({
  status,
  pullRequest,
}: {
  status: FeatureStatus;
  pullRequest: string | null
}) {
  const map: Record<FeatureStatus, string> = {
    shipped:
      "bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-600/20 dark:text-emerald-300",
    "in-progress":
      "bg-amber-500/10 text-amber-700 ring-1 ring-amber-500/20 dark:text-amber-300",
    planned:
      "bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/20 dark:text-sky-300",
  };
  const label =
    status === "shipped"
      ? "Shipped"
      : status === "in-progress"
        ? "In progress"
        : "Planned";
  return (
    <>
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${map[status]}`}
      >
        {status === "shipped" ? "✅" : status === "in-progress" ? "🔧" : "🧭"}
        {label}
      </span>

      {status === "shipped" && (
        <a href={pullRequest}>
          <FontAwesomeIcon icon={faCodePullRequest} />
        </a>
      )}
    </>
  );
}

export default StatusBadge;
